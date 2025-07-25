import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyItems = [
  { id: 1, category: "Electronics", title: "iPhone 13 Unopened", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=facearea&w=400&h=400" },
  { id: 2, category: "Furniture", title: "IKEA Desk for Sale", imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400" },
  { id: 3, category: "Clothing", title: "Nike Padding (New)", imageUrl: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=facearea&w=400&h=400" },
  { id: 4, category: "Household", title: "Cheap Air Purifier", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400" },
];

const categoryOptions = [
  { value: '', label: 'All Categories' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Furniture', label: 'Furniture' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Household', label: 'Household' },
];

const areaOptions = [
  { value: 'ALL', label: 'ALL' },
  { value: 'D01', label: 'D01' },
  { value: 'D02', label: 'D02' },
  { value: 'D03', label: 'D03' },
];

const MarketPage: React.FC = () => {
  const [category, setCategory] = React.useState('');
  const [area, setArea] = React.useState('ALL');
  const [search, setSearch] = React.useState('');

  return (
    <div className="min-vh-100 bg-light py-5" style={{ width: '100vw' }}>
      <div className="w-100 d-flex flex-column align-items-center">
        <h2 className="display-6 fw-bold mb-4 text-center w-100">Secondhand Market List</h2>
        <form className="row g-2 justify-content-center mb-4 w-100 px-3" style={{ maxWidth: 1200 }} onSubmit={e => { e.preventDefault(); }}>
          <div className="col-12 col-md-3">
            <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
              {categoryOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-2">
            <select className="form-select" value={area} onChange={e => setArea(e.target.value)}>
              {areaOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-5">
            <input type="text" className="form-control" placeholder="Search for items..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="col-12 col-md-2">
            <button type="submit" className="btn btn-success w-100">Search</button>
          </div>
        </form>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 w-100 px-3" style={{ maxWidth: 1200 }}>
          {dummyItems.map(item => (
            <div key={item.id} className="col">
              <div className="card h-100 shadow-sm">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="card-img-top" style={{height: '180px', objectFit: 'cover'}} />
                ) : (
                  <div className="d-flex align-items-center justify-content-center bg-secondary" style={{height: '180px'}}>
                    <span className="text-white">No Image</span>
                  </div>
                )}
                <div className="card-body">
                  <div className="text-success fw-semibold mb-1">{item.category}</div>
                  <div className="card-title h6">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPage; 