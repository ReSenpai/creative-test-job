import * as data from '../data/entities.json';
import { EntitiesType } from '../types/types';
// server API simulated

const simulatedServerResponse: Promise<Array<EntitiesType>> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.response);
    }, 200);

})

export const apartamentsAPI = {
    async getData () {
        try {
            const response = await simulatedServerResponse;
            return response
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
