function connectService($http){
	return {
		connect: function(data){
			return $http.post('http://localhost:8000/api/login', data);
		},
		disconnect: function(){
			return $http.post('http://localhost:8000/api/logout');
		}
	};
}
