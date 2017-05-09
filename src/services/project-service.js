projectService.$inject = ['$http', 'apiUrl'];

export default function projectService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/projects`)
      .then(res => res.data);
    },
    add(project) {
      return $http.post(`${apiURl}/projects`, project)
      .then(res => res.data);
    }
  };
}