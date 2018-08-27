<template>

<div class="expense">

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





    <div class="expense">

<b-container>
    <b-row>
        <b-col cols="8">
<h1>Add Expense</h1>

<br>

<b-form @submit.prevent="formSubmission" >
      <b-form-group id="exampleInputGroup1"
                    label="Amount:"
                    label-for="amount"
                    description="">
        <b-form-input id="amount"
                      type="text"
                      v-model="expense.amount"
                      required
                      placeholder="Enter amount">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
                    label="Source:"
                    label-for="source">
        <b-form-select id="source"
                      :options="sources"
                      required
                      v-model="expense.source">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup5"
                    label="Date:"
                    label-for="date"
                    description="">
        <b-form-input id="date"
                      type="datetime-local"
                      v-model="expense.date"
                      required
                      >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>


        </b-col>
        <b-col cols="4">
            <Tracker/>
        </b-col>
    </b-row>
</b-container>


        </div>

</template>


<script>

import moment from 'moment'
import Tracker from '@/components/Tracker'

export default {
    name : 'Expense',
    components : {
        Tracker
    },
    data(){
        return{
            sources : [
        'Bank', 'Cash'
            ],
            expense : {
                source : 'Bank',
                amount : 0,
                date : this.getCurrentFormattedDate()
            }
        }
    },
    methods : {
        formSubmission(){
            const newTrx={
                amount : this.expense.amount,
                source : this.expense.source,
                date : this.expense.date,
                trxType:'expense'
            };

            this.$store.commit('addTransaction',newTrx);

            this.$router.go(-1);
        },
        getCurrentFormattedDate(){
            return moment().format('YYYY-MM-DD[T]HH:MM');
        }
    }
};
</script>


<style scoped>
</style>
