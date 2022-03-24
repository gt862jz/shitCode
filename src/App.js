import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      
    </div>
  );
};

export default App;
