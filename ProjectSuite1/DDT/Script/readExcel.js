function readExcel(){

   ProjectSuite.Variables.data.Reset()

   for(;!ProjectSuite.Variables.data.IsEOF();) {
    let excel = ProjectSuite.Variables.data.Value
    var customerName = excel("customerName")
    var street = excel("street")
    var city = excel("city")
    var state = excel("state")

    
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
  
  
    ProjectSuite.Variables.data.Next()
    }
    }
