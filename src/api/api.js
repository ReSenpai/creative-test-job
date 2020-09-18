import * as data from '../data/entities.json';
// server API simulated
const simulatedServerResponse = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.response);
    }, 200);
})

export const apartamentsAPI = {
    async getData () {
        try {
            const response = await simulatedServerResponse;
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
