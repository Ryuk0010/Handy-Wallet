import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";


function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState(""); // Initialize with empty string
  const [amount, setAmount] = useState(""); // Initialize with empty string
  const [loading, setLoading] = useState(false); // Tracks loading state

  /**
   * Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true); // Start the loading spinner

    const result = await db
      .insert(Expenses)
      .values({
        name: name, // Expense name
        amount: amount, // Expense amount
        budgetId: budgetId, // Linked budget ID
        createdAt: moment().format("YYYY-MM-DD"), // Correct date format
      })
      .returning({ insertedId: Budgets.id }); // Return the ID of the inserted expense

    // Clear input fields after submission
    setAmount("");
    setName("");

    if (result) {
      toast("New Expense Added!"); // Show toast message
      refreshData(); // Refresh the data
    }

    setLoading(false); // End the loading spinner
  };

  return (
    <div className="border p-5 rounded-2xl">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g. Biryani"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full rounded-full"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
