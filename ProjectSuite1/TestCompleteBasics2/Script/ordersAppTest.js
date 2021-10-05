function Test1()
{
  TestedApps.Orders.Run(1, true);
  let orders = Aliases.OrdersApp;
  let listView = orders.MainForm.OrdersView;
  listView.ClickR(158, 89);
  listView.PopupMenu.Click("New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(41, 12);
  textBox.SetText("giorgi");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("muxiani");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("tbilisi");
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("goergia");
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText("123456789");
  textBox.Keys("[Tab]");
  groupBox.Visa.Keys("[Tab]");
  textBox = groupBox.CardNo;
  textBox.Keys("[Tab]");
  groupBox.Click(155, 365);
  textBox.Click(57, 14);
  textBox.SetText("12345678912310");
  orderForm.SubmitButton.ClickButton();
  
  Tables.OrdersView.Check();
  
  listView.ClickItemR("giorgi", "1");
  listView.PopupMenu.Click("Delete order");
  orders.dlgConfirmation.btnYes.ClickButton();
  
  var Table = Tables.OrdersView;
  var RowCount = Table.RowCount;
  
    if(RowCount == 1){
    Log.Message("success")
  }else{
    Log.Error("assertion error")
  }
    
}

