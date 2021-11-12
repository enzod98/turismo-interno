import { api } from "src/boot/axios"

export function getData ({commit}) {
    api.get('/places.json').then( ({ data }) =>  {
        commit('setPlaces', data)
    })
}
