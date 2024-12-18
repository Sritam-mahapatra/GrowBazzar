import React, { useState, useEffect } from 'react';

const SellerAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 50, stock: 20 },
    { id: 2, name: 'Product B', price: 30, stock: 50 },
  ]);
  const [editingProduct, setEditingProduct] = useState(null); // Maintain the state of the product being edited
  const [showModal, setShowModal] = useState(false);

  // Dashboard Data (simulated)
  const dashboardData = {
    totalSales: 1200,
    totalOrders: 45,
    pendingOrders: 5,
    shippedOrders: 40,
  };

  // Sidebar Component
  const Sidebar = () => (
    <div className="w-64 bg-green-800 text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-6">Seller Panel</h2>
      <ul className="space-y-4">
        <li
          className={`cursor-pointer ${activeTab === 'dashboard' ? 'text-yellow-300' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer ${activeTab === 'products' ? 'text-yellow-300' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </li>
        <li
          className={`cursor-pointer ${activeTab === 'orders' ? 'text-yellow-300' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </li>
        <li
          className={`cursor-pointer ${activeTab === 'profile' ? 'text-yellow-300' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </li>
      </ul>
    </div>
  );

  // Product Management
  const Products = () => (
    <div className="p-8">
      <h3 className="text-3xl font-bold mb-6 text-green-800">Product Management</h3>
      <button
        className="bg-green-800 text-white py-2 px-4 rounded-md mb-6 hover:bg-green-700"
        onClick={handleAddNewProduct}
      >
        Add New Product
      </button>
      {/* Product List Table */}
      <table className="w-full table-auto border-collapse shadow-lg rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">{product.stock}</td>
              <td className="px-4 py-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="ml-4 text-red-600 hover:underline"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              placeholder="Product Name"
              value={editingProduct?.name || ''}
              onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            />
            <input
              type="number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              placeholder="Price"
              value={editingProduct?.price || ''}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            />
            <input
              type="number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              placeholder="Stock"
              value={editingProduct?.stock || ''}
              onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-md"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="bg-green-800 text-white py-2 px-4 rounded-md"
                onClick={handleSaveProduct}
              >
                {editingProduct ? 'Save Changes' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Handle Add New Product
  const handleAddNewProduct = () => {
    setEditingProduct({ name: '', price: '', stock: '' }); // Ensure fresh empty state
    setShowModal(true);
  };

  // Handle Edit Product
  const handleEditProduct = (product) => {
    setEditingProduct({ ...product }); // Copy the existing product details into editingProduct state
    setShowModal(true);
  };

  // Handle Save Product (Add or Edit)
  const handleSaveProduct = () => {
    if (editingProduct.id) {
      // Update existing product
      setProducts(products.map((product) => (product.id === editingProduct.id ? editingProduct : product)));
    } else {
      // Add new product
      const newProduct = { ...editingProduct, id: products.length + 1 };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    setEditingProduct(null); // Reset after saving
  };

  // Handle Cancel Edit
  const handleCancelEdit = () => {
    setShowModal(false);
    setEditingProduct(null); // Reset the state to prevent form persistence
  };

  // Handle Delete Product
  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  // Dashboard
  const Dashboard = () => (
    <div className="p-8">
      <h3 className="text-3xl font-bold mb-6 text-green-800">Dashboard Overview</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h4 className="text-xl font-semibold">Total Sales</h4>
          <p className="text-2xl text-green-800">${dashboardData.totalSales}</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h4 className="text-xl font-semibold">Total Orders</h4>
          <p className="text-2xl text-green-800">{dashboardData.totalOrders}</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h4 className="text-xl font-semibold">Pending Orders</h4>
          <p className="text-2xl text-yellow-600">{dashboardData.pendingOrders}</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h4 className="text-xl font-semibold">Shipped Orders</h4>
          <p className="text-2xl text-blue-600">{dashboardData.shippedOrders}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'products' && <Products />}
        {activeTab === 'orders' && <div>Orders section is not implemented yet.</div>}
        {activeTab === 'profile' && <div>Profile section is not implemented yet.</div>}
      </div>
    </div>
  );
};

export default SellerAdminPanel;
