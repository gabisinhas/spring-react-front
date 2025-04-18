import axios, { AxiosPromise } from 'axios';
import { FoodData } from '../interface/FoodData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const postData = async ():AxiosPromise<FoodData[]> => {
    const response = axios.post(API_URL + '/food');
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry:2,
        onSucess:() =>{
            queryClient.invalidateQueries(['food-data'])
        }
    })
    
    return mutate
}