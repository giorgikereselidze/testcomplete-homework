var databaseSetup=require("databaseSetup")

  function printName(){

      var customerName = databaseSetup.getDataFromDb("SELECT top 1 customerName FROM [orders].[dbo].[orders]",["customerName"]);
      var street = databaseSetup.getDataFromDb("SELECT top 1 street FROM [orders].[dbo].[orders]",["street"]);
      var city = databaseSetup.getDataFromDb("SELECT top 1 city FROM [orders].[dbo].[orders]",["city"]);
      var state = databaseSetup.getDataFromDb("SELECT top 1 state FROM [orders].[dbo].[orders]",["state"]);
      

      TestedApps.Orders.Run(1, true);
  let orders = Aliases.Orders;
  let listView = orders.MainForm.OrdersView;
  listView.ClickR(143, 76);
  listView.PopupMenu.Click("New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(38, 6);
  textBox.SetText(customerName);
  textBox = groupBox.Street;
  textBox.Click(26, 8);
  textBox.SetText(street);
  textBox = groupBox.City;
  textBox.Click(30, 13);
  textBox.SetText(city);
  textBox = groupBox.State;
  textBox.Click(60, 4);
  textBox.SetText(state);
  orderForm.ButtonOK.ClickButton();

    }