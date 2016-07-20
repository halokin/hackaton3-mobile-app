function userService($http){
	return {
		getAll: function(){
			return $http.get('http://localhost:8000/api/users');
		},
		create: function(user){
			return $http.post('http://localhost:8000/api/users', user);
		}
	};
}
