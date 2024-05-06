import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ApiFetch = () => {
    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://p-9x7e.onrender.com/products/products");
            setProducts(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleDelete = async (deleteId) => {
        try {
            const res = await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${deleteId}`);
            alert(res.data.message);
            fetchData();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleAdd = async () => {
        try {
            const res = await axios.post("https://p-9x7e.onrender.com/products/add-product", {
                pName: productName,
                pPrice: productPrice
            });
            alert(res.data.message);
            setShowAddModal(false);
            setProductName('');
            setProductPrice('');
            fetchData();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleEdit = async () => {
        try {
            const res = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${editProductId}`, {
                pName: productName,
                pPrice: productPrice
            });
            alert(res.data.message);
            setShowEditModal(false);
            setProductName('');
            setProductPrice('');
            setEditProductId(null);
            fetchData();
        } catch (error) {
            console.error("Error editing product:", error);
        }
    };

    const handleEditClick = (productId, productName, productPrice) => {
        setShowEditModal(true);
        setEditProductId(productId);
        setProductName(productName);
        setProductPrice(productPrice);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mt-5">
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>P Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.pName}</td>
                            <td>{product.pPrice}</td>
                            <td>{product.date}</td>
                            <td>
                                <Button variant="info" onClick={() => handleEditClick(product._id, product.pName, product.pPrice)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="success" onClick={() => setShowAddModal(true)}>Add Product</Button>

            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ApiFetch;
