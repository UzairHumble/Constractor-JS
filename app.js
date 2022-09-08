document.getElementById('employes-data').style.display = 'none';
document.getElementById('resturant-menu').style.display = 'none';
document.getElementById('shapes').style.display = 'none';
document.getElementById('bars').style.display = 'flex';
function showEmployee() {
  document.getElementById('employes-data').style.display = 'block';
  document.getElementById('resturant-menu').style.display = 'none';
  document.getElementById('shapes').style.display = 'none';
  document.getElementById('bars').style.display = 'none';
}
function hideEmployee() {
  document.getElementById('employes-data').style.display = 'none';
  document.getElementById('resturant-menu').style.display = 'none';
  document.getElementById('shapes').style.display = 'none';
  document.getElementById('bars').style.display = 'flex';
}

function showMenu() {
  document.getElementById('resturant-menu').style.display = 'block';
  document.getElementById('employes-data').style.display = 'none';
  document.getElementById('shapes').style.display = 'none';
  document.getElementById('bars').style.display = 'none';
}
function hideMenu() {
  document.getElementById('resturant-menu').style.display = 'none';
  document.getElementById('employes-data').style.display = 'none';
  document.getElementById('shapes').style.display = 'none';
  document.getElementById('bars').style.display = 'flex';
}

function showShape() {
  document.getElementById('resturant-menu').style.display = 'none';
  document.getElementById('employes-data').style.display = 'none';
  document.getElementById('shapes').style.display = 'block';
  document.getElementById('bars').style.display = 'none';
}
function hideShape() {
  document.getElementById('resturant-menu').style.display = 'none';
  document.getElementById('employes-data').style.display = 'none';
  document.getElementById('shapes').style.display = 'none';
  document.getElementById('bars').style.display = 'flex';
}

function Resturant(item, price) {
  this.item = item;
  this.price = price;
}
var item1 = new Resturant('Chicken Tikka', 250);
document.getElementById('item1').innerText = item1.item;
document.getElementById('price1').innerText = item1.price;
var item2 = new Resturant('Chicken Boti', 500);
document.getElementById('item2').innerText = item2.item;
document.getElementById('price2').innerText = item2.price;
var item3 = new Resturant('Bihari Boti', 500);
document.getElementById('item3').innerText = item3.item;
document.getElementById('price3').innerText = item3.price;
var item4 = new Resturant('Reshmi Kabab', 450);
document.getElementById('item4').innerText = item4.item;
document.getElementById('price4').innerText = item4.price;
var item5 = new Resturant('Malai Boti', 450);
document.getElementById('item5').innerText = item5.item;
document.getElementById('price5').innerText = item5.price;
var item6 = new Resturant('Beef Boti', 450);
document.getElementById('item6').innerText = item6.item;
document.getElementById('price6').innerText = item6.price;
var item7 = new Resturant('Beef Kabab', 500);
document.getElementById('item7').innerText = item7.item;
document.getElementById('price7').innerText = item7.price;
var item8 = new Resturant('Beef Bihari Kabab', 450);
document.getElementById('item8').innerText = item8.item;
document.getElementById('price8').innerText = item8.price;

function Employees(name, id, email, address, designation, experience, salary) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.address = address;
  this.designation = designation;
  this.experience = experience;
  this.salary = salary;
}
var employee1 = new Employees(
  'Abdul Rehman',
  '001',
  'abdulrehman1239091@gmail.com',
  'Gulistan e Jauhar Karachi',
  'C.E.O',
  '5 Years',
  500000
);
document.getElementById('emp1-name').innerText = employee1.name;
document.getElementById('emp1-id').innerText = employee1.id;
document.getElementById('emp1-email').innerText = employee1.email;
document.getElementById('emp1-address').innerText = employee1.address;
document.getElementById('emp1-designation').innerText = employee1.designation;
document.getElementById('emp1-experience').innerText = employee1.experience;
document.getElementById('emp1-salary').innerText = employee1.salary;

var employee2 = new Employees(
  'Yahya',
  '002',
  'Yahya123@yahoo.com',
  'Gulshan e Iqbal Karachi',
  'Manager',
  '3 Years',
  300000
);
document.getElementById('emp2-name').innerText = employee2.name;
document.getElementById('emp2-id').innerText = employee2.id;
document.getElementById('emp2-email').innerText = employee2.email;
document.getElementById('emp2-address').innerText = employee2.address;
document.getElementById('emp2-designation').innerText = employee2.designation;
document.getElementById('emp2-experience').innerText = employee2.experience;
document.getElementById('emp2-salary').innerText = employee2.salary;

var employee3 = new Employees(
  'Umair',
  '003',
  'syedumair786@hotmail.com',
  'S.M.C.H.S Karachi',
  'Senior Developer',
  '2.5 Years',
  100000
);
document.getElementById('emp3-name').innerText = employee3.name;
document.getElementById('emp3-id').innerText = employee3.id;
document.getElementById('emp3-email').innerText = employee3.email;
document.getElementById('emp3-address').innerText = employee3.address;
document.getElementById('emp3-designation').innerText = employee3.designation;
document.getElementById('emp3-experience').innerText = employee3.experience;
document.getElementById('emp3-salary').innerText = employee3.salary;

var employee4 = new Employees(
  'Shaheer',
  '004',
  'shaheer421@gmail.com',
  'Bahria Town karachi',
  'Junior Developer',
  '1.5 Years',
  90000
);
document.getElementById('emp4-name').innerText = employee4.name;
document.getElementById('emp4-id').innerText = employee4.id;
document.getElementById('emp4-email').innerText = employee4.email;
document.getElementById('emp4-address').innerText = employee4.address;
document.getElementById('emp4-designation').innerText = employee4.designation;
document.getElementById('emp4-experience').innerText = employee4.experience;
document.getElementById('emp4-salary').innerText = employee4.salary;

var employee5 = new Employees(
  'Abdullah',
  '005',
  'abdullah420@gmail.com',
  'Shahrahe Faisal',
  'Accountant',
  '1.5 Years',
  70000
);
document.getElementById('emp5-name').innerText = employee5.name;
document.getElementById('emp5-id').innerText = employee5.id;
document.getElementById('emp5-email').innerText = employee5.email;
document.getElementById('emp5-address').innerText = employee5.address;
document.getElementById('emp5-designation').innerText = employee5.designation;
document.getElementById('emp5-experience').innerText = employee5.experience;
document.getElementById('emp5-salary').innerText = employee5.salary;

var employee6 = new Employees(
  'Wajhee',
  '006',
  'wajhee456@yahoo.com',
  'Gulshan e Maymar',
  'Designer',
  '1 Year',
  75000
);
document.getElementById('emp6-name').innerText = employee6.name;
document.getElementById('emp6-id').innerText = employee6.id;
document.getElementById('emp6-email').innerText = employee6.email;
document.getElementById('emp6-address').innerText = employee6.address;
document.getElementById('emp6-designation').innerText = employee6.designation;
document.getElementById('emp6-experience').innerText = employee6.experience;
document.getElementById('emp6-salary').innerText = employee6.salary;
