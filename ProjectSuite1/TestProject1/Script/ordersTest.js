function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Activate();
  Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(620, 14);
  mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(38, 9);
  textBox.SetText("giorgi");
  textBox = groupBox.Street;
  textBox.Click(29, 11);
  textBox.SetText("gldani");
  textBox = groupBox.City;
  textBox.Click(34, 17);
  textBox.SetText("tbilisi");
  textBox = groupBox.State;
  textBox.Click(14, 7);
  textBox.SetText("asdasda");
  textBox = groupBox.Zip;
  textBox.Click(22, 10);
  textBox.SetText("12345");
  groupBox.MasterCard.ClickButton();
  textBox = groupBox.CardNo;
  textBox.Click(48, 10);
  textBox.SetText("123456789101112");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpEqual, "1");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "wChecked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "giorgi");
  Aliases.Orders.OrderForm.ButtonOK.Click();
}