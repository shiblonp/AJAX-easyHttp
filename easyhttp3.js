// Library for making Http requests
//updated version using fetch, Async, Await
class EasyHTTP{
    async get(url){
        // return new Promise((resolve, reject)=>{
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err=>reject(err));
        // });
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    async post(url, data){
        // return new Promise((resolve, reject)=>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });
            // .then(res => res.json())
            // .then(data => resolve(data))
            // .catch(err=>reject(err));
        // });
        const resData = await response.json();
        return resData;
        
    }
    async put(url, data){
        // return new Promise((resolve, reject)=>{
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });
        // .then(res => res.json())
        // .then(data => resolve(data))
        // .catch(err=>reject(err));
        // });
        const resData = await response.json();
        return resData;
    }
    async delete(url){
        // return new Promise((resolve, reject)=>{
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        });
        //     .then(res => res.json())
        //     .then(() => resolve('Resource deleted'))
        //     .catch(err=>reject(err));
        // });
        const resData = await 'Resource Deleted';
        return resData;
    }
}