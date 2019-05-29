angular.module('fmbfService', [])
    //定义对应的方法
	// super simple service
    // each function returns a promise object
    //函数通过发送delete，get，post等报文分别
    
	.factory('fmbf', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/fmbf');
			},
			create : function(fmbfData) {
				return $http.post('/api/fmbf', fmbfData);
			},
			delete : function(id) {
				return $http.delete('/api/fmbf/' + id);
			},
			modify: function(id,fmbfData)
			{
				$http.delete('/api/fmbf/' + id);
				return $http.post('/api/fmbf', fmbfData);
			},
			getitem:function(id)
			{
				return $http.get('/api/fmbf'+id);
			}
		}
	}]);
