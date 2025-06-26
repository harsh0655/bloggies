import React from "react";
function CancelPage() {
    return(
        <div className="min-h-screen flex items-center justify-center p-8 bg-red-100">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">unfortunately payment cancelled</h1>
            <p className="text-gray-600">Hey! You didn&apos;t complete the checkout process...</p>
          </div>
        </div>
      );
  }
  
  export default CancelPage;
  