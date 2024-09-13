"use client"
import React, { useEffect, useState } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import BudgetItem from './BudgetItem'

function BudgetList() {

  const [budgetList,setBudgetList]=useState([]);
  const {user}=useUser();
  useEffect(()=>{
    user&&getBudgetList();
  },[user])
  /**
   * used to get budget List
   */
  const getBudgetList=async()=>{

    const result=await db.select({
      ...getTableColumns(Budgets),
      totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql `count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))
    ;

    setBudgetList(result);

  }

  return (
    <div className="h-screen overflow-hidden p-10 bg-slate-950">
  <h2 className="font-bold text-3xl text-white mb-6">My Budgets</h2>
  
  {/* Scrollable container */}
  <div className="mt-7 h-full overflow-y-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Component for creating new budget */}
      <CreateBudget refreshData={() => getBudgetList()} />

      {/* If there are budgets, map over them and display BudgetItem */}
      {budgetList?.length > 0
        ? budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))
        : // Placeholder for loading states
          [1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"
            ></div>
          ))}
    </div>
  </div>
</div>

  )
}

export default BudgetList