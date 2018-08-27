<template>


<div class="tracker">
    
            <h1>Tracker</h1>
            
            
        <br>
<p>Current Balance : {{currentBalance}}</p>
<p>Total Operations : {{transactionOperationCount}}</p>

<p><b><u>Transaction List</u></b></p>
<v-data-table
    :headers="headers"
    :items="transactionList"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.source }}</td>
      <td class="text-xs-right">{{ props.item.amount }}</td>
      <td class="text-xs-right">{{ props.item.trxType }}</td>
      <td class="text-xs-right">{{ props.item.date }}</td>
    </template>
  </v-data-table>

    
    

</div>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "Tracker",
  data() {
    return {
        headers: [
          { text: 'ID', value: 'id'},
          { text: 'Source', value: 'source'},
          { text: 'Amount' , value: 'amount'},
          { text: 'Transaction Type', value: 'trxType' },
          { text: 'Date', value: 'date' },
        ],
    };
  },
  computed: {
    horny() {
      return "Horny?";
    },
    ...mapState([
      "currentBalance",
      "transactionList",
      "transactionOperationCount"
    ])
  }
};
</script>


<style scoped>
.tracker{
}
</style>
