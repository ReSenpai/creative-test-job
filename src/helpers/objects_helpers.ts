import { EntitiesType } from "../types/types";

type ObjectType = {
    liked: boolean
}

export const changeObjToArr = (
    items: Array<EntitiesType>, 
    itemId: number,
    newObjProps: ObjectType
): Array<EntitiesType> => {
    return items.map(item => {
        if(item.id === itemId) {
            return {
                ...item, 
                ...newObjProps
            }
        }
        return item;
    })
}