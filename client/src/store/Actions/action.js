import axios from 'axios';

export function GetItems() {
    return dispatch => {
        dispatch(SetItemLoading())
       axios.get('/api/manufacturer')
        .then(res =>
        dispatch({
        type : "GET_ITEMS",
        payload:res.data
        })
    );
}}

export function AddItem(obj) {
    return dispatch=> {
      axios.post('/api/manufacturer',obj)
        .then(res => {
            console.log("Res",res.data);
        dispatch({
            type: "ADD_ITEM",
            payload:res.data
        })}
    )
}}

export function EditItem(id,obj) {
    console.log("id",id)
    console.log("obj",obj)
    return dispatch=> {
       console.log("id",id);
        axios.put('/api/manufacturer/'+id,obj)
        .then(res=>
            console.log("response",res)
      
    )
}
}

export function DeleteItem(id) {
    return dispatch=> {
        axios.delete('/api/manufacturer/'+id)
        .then(res=>{
            console.log("Delete Res",res.data);
        dispatch({
            type: "DELETE_ITEM",
            payload:id   
        })
    })
}
}
export function SetItemLoading() {
    return {
        type: "ITEMS_LOADING",
    }
}
