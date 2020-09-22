type AddressType = {
    city: string
    street: string
    house: string
    room: string
}

type AttributesType = {
    title: string
    rooms: number
    address: AddressType
    area: number
    unit: string
    photo: string
}

type AttributesRelationshipsType = {
    first_name: string
    last_name: string
    middle_name: string
}

type RelationshipsType = {
    type: string
    id: number
    attributes: AttributesRelationshipsType
}

export type EntitiesType = {
    type: string
    id: number
    liked: boolean
    attributes: AttributesType
    relationships: RelationshipsType
}