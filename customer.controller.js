const Customer = require("./customer.model");

module.exports = {
  getCustomers: async (req, res, next) => {
    let customers = await Customer.find({});
    return res.json({ customers });
  },

  getCustomerDetails: async (req, res, next) => {
    let { customerId } = req.params;
    let customer = await Customer.findById(customerId);
    return res.json({ customer });
  },

  updateCustomerDetails: async (req, res, next) => {
    let { name, address, phone, email } = req.body;
    let { customerId } = req.params;
    let updatedCustomer = await Customer.findByIdAndUpdate(customerId, {
      name,
      address,
      phone,
      email,
    });

    if (!updatedCustomer) {
      return res.json({
        status: "NOT_SAVED",
      });
    }

    return res.json({ message: "Customer data not updated " });
  },

  createCustomer: async (req, res, next) => {
    let { name, address, phone, email } = req.body;
    let newCustomer = new Customer({
      name,
      address,
      phone,
      email,
    });

    let savedCustomer = await newCustomer.save();
    if (!savedCustomer) {
      return res.json({
        status: "NOT_SAVED",
      });
    }

    return res.json({ message: "Customer data successfully saved" });
  },
};
