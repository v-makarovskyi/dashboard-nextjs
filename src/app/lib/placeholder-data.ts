const users = [
  {
    name: "User",
    email: "vova777@test.pl",
    password: "123456",
  },
];

const customers = [
  {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: '/customers/delba-de-oliveira.png',
  },

  {
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    amount: 20348,
    status: "pending",
  },
  {
    amount: 3040,
    status: "paid",
  },
  {
    amount: 44800,
    status: "paid",
  },
  {
    amount: 34577,
    status: "pending",
  },
  {
    amount: 54246,
    status: "pending",
  },
  {
    amount: 666,
    status: "pending",
  },
  {
    amount: 32545,
    status: "paid",
  },
  {
    amount: 1250,
    status: "paid",
  },
  {
    amount: 8546,
    status: "paid",
  },
  {
    amount: 500,
    status: "paid",
  },
  {
    amount: 8945,
    status: "paid",
  },
  {
    amount: 1000,
    status: "paid",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { users, customers, invoices, revenue };
