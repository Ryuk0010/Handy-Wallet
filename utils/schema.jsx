import {
    integer, numeric, pgTable, serial, varchar
  } from 'drizzle-orm/pg-core';
  
  export const Budgets = pgTable('budgets', {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: numeric("amount").notNull(), // Use numeric for monetary values
    Icon: varchar('Icon'),
    createdBy: varchar("createdBy").notNull()
  });
  
  export const Incomes = pgTable('incomes', { // Fixed typo
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: numeric("amount").notNull(), // Use numeric for monetary values
    Icon: varchar('Icon'),
    createdBy: varchar("createdBy").notNull()
  });
  
  export const Expenses = pgTable('expenses', { // Fixed typo
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: numeric("amount").notNull(), // Use numeric for monetary values
    BudgetId: integer("budgetId").references(() => Budgets.id),
    createdBy: varchar("createdBy")
  });
  