<template>
    <div class="home">

 <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <v-card-text class="px-0">

<h1>Dashboard</h1>

<br>
<p>Current Balance : {{currentBalance}}</p>

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



<v-btn @click="addIncome" color="success">Add Income</v-btn>

<v-btn @click="addExpense" color="error">Add Expense</v-btn>


          </v-card-text>
        </v-card>
      </v-flex>


        <v-flex xs6>
        <v-card color="tracker">
          <v-card-text class="px-0">

<Tracker/>
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>







    </div>
</template>

<script>
import { mapState } from "vuex";
import Tracker from "@/components/Tracker.vue";

export default {
  name: "Home",
  components: { Tracker },
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
  methods: {
    addExpense() {
      this.$router.push("/expense");
    },
    addIncome() {
      this.$router.push("/income");
    }
  },
  computed: {
    // a computed getter
    sayHello() {
      return "Hello World";
    },
    ...mapState([
      "transactionList",
      "currentBalance",
      "transactionOperationCount"
    ])
  }
};
</script>


<style scoped>
button {
  margin: 5px;
}
</style>
