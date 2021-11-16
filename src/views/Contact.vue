<template> 
    <div class="Contact">
        <table id="contactlist">
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            <tr v-for="contact in contacts" :key="contact.name">
                <td>{{ contact.name  }}</td>
                <td>{{ contact.phone}}</td>
                <td>{{contact.email}}</td>

            </tr>
        </table>
    </div>
</template> 
 
<script> 
       
    export default { 
        name: "Contact",
        data: function() {
            return{
                contacts: [
                    {id: 1, name: "Kaur Taal", phone: "555 5555", email: "taalkaur@gmail.com"},
                    {id: 2, name: "Martin Kisand", phone: "555 5556", email: "martin.kisand@ut.ee"},
                    {id: 3, name: "Herman Rull", phone: "555 5557",  email: "rullherman@gmail.com"},
                ],
            }
        }
    };
    
</script> 
 
<style> 
  .Contact {
    margin-top: 0px;
    padding: 30px;
    display: flex;
    justify-content: center;

    width: 100%;
   }
  #contactList{
      text-align: center;
      padding: 20px;
      width: 100%;
      margin: 300px;
      margin-block: 100px;

      background-color: white;
  }
  td{
    height: 50px;
  }
</style> 