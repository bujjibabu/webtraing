angular.module('myApp').controller('page1Ctrl',function($scope){
	$scope.tableData = [
		{name:'bujji',sno:1},
		{name:'babu',sno:2},
		{name:'sravani',sno:3},
		{name:'dixa',sno:4}
	];
	$scope.pagename = 'First Page!'
});