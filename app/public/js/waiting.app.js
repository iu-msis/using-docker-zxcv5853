var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
      },

methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json() )
      .then(json => { waitingApp.patients = json })
    }
},

handleSubmit(event) {
//  fetch(url, {
//    method: 'post',
//    data: this.recordPatient
//  })
//  .then(...)

},
  created() {
    this.fetchPatients()
}

});
