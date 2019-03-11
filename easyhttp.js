function easyHTTP(){
    this.http = new XMLHttpRequest(); 
}

//GET request
//uses callback as parameter to run asynchronously
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    //setting this to self variable to pass to next function
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        }else{
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}

//POST method
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open ('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.sent(JSON.stringify(data));
}

//PUT request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open ('PUT', url, true);
    this.http.setRequestHeader('content-type', 'application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.sent(JSON.stringify(data));
}

//DELETE request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    //setting this to self variable to pass to next function
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, 'Post Deleted');
        }else{
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}