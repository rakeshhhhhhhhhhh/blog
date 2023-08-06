import Blog from "./Components/Blog";
import 'package:flutter/material.dart';
import 'home.dart';

async function main()  {
 
  await Firebase.initializeApp();
  runApp(App());
}
function App() {
  return (
    <>
      <Blog />
    </>
  );
}

export default App;
