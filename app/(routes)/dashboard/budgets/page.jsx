import React from 'react'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
<div className="p-10 w-5/8 h-screen bg-slate-950 overflow-y-auto overflow-x-hidden">
  <h2 className="font-bold text-3xl text-white mb-6">My Budgets</h2>
  <BudgetList />
</div>

  )
}

export default Budget