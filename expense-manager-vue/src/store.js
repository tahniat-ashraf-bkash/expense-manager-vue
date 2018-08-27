import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 0,
    currentBalance: 0,
    transactionList: [],
    transactionOperationCount: 0
  },
  mutations: {
    addTransactionOperationCount(state) {
      state.transactionOperationCount++;
    },
    addTransaction(state, payload) {
      payload.id=++state.id;
      state.transactionList.push(payload);

      if(payload.trxType==='expense'){
        //expense
        state.currentBalance=state.currentBalance-payload.amount;
      }else{
        //income
        state.currentBalance=state.currentBalance-payload.amount;
      }
    },
    removeTransaction(state, payload) {
      const transaction = state.transactionList.find(trx => {
        trx.id == payload.id;
      });

      state.transactionList.splice(state.transactionList.indexOf(transaction),1);

    }
  },
  actions: {},
  getters: {
    allIncome(state) {
      return state.transactionList.filter(
        trx => trx.trxType === "income"
      );
    },
    allExpense(state) {
      return state.transactionList.filter(
        trx => trx.trxType === "expense"
      );
    }
  }
});
