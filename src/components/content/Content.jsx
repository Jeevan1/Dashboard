import React from "react";
import ContentHeader from "./ContentHeader";
import { Transactions, orders, products, recentActivity } from "../../data";
import {BsArrowRight,BsPlusLg} from "react-icons/bs";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";
import {PiDotOutlineFill,PiShareFat} from "react-icons/pi";
import {
  Chart as ChartJS,
  BarElement,CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Line } from "react-chartjs-2";
import "./content.scss";
import Footer from "../footer/Footer";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function Content() {

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Thru', 'Fri', 'Sat'],
    datasets: [{
      label: false,
      data: [19, 12, 3, 5, 2, 3],
      backgroundColor: 'orange',
      border: '0px',
      barThickness : 20,
    }]
  };

  const options = {
      scales: {
        y: {
          display: false,
          grid: {
            display: false // Remove y-axis gridlines
          },
          ticks: {
            display: false // Remove y-axis labels
          }
        },
        x: {
          grid: {
            display: false // Remove x-axis gridlines
          },
          ticks: {
            display: false // Remove y-axis labels
          }
        }
      },
      plugins: {
        legend: {
          display: false // Remove dataset labels from the legend
        }
      },
    };

    // /line 
    const line_data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales",
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.4
        }
      ]
    };
  
    const line_options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

  return (
    <div className="contents row ">
      <div className="daily_sales col-lg-4 col-md-6  my-4">
        <div className="container-fluid p-3 bg-white rounded-3">
          <ContentHeader title={'Daily Sales'} subtitle={'Go to columns for details.'} display={'d-none'}/>
          <Bar data={data} options={options} className="py-2">

          </Bar>
        </div>
      </div>
      <div className="summary col-lg-4 col-md-6  my-4">
        <div className="container-fluid  p-3 bg-white rounded-3">
          <ContentHeader title={'Summary'}  sales={'d-none'}/>
          <Bar data={data} options={options} className="py-2">

          </Bar>
        </div>
      </div>
      <div className="daily_sales col-lg-4 col-md-6 my-4">
        <div className="container-fluid  p-3 bg-white rounded-3">
          <ContentHeader title={'Daily Sales'}display={'d-none'} sales={'d-none'}/>
          <Bar data={line_data} options={line_options} className="py-2">

          </Bar>
        </div>
      </div>


      <div className="recent_activity col-lg-4 col-md-6 my-4">
        <div className=" bg-white px-3 py-3">
        <ContentHeader
          title={"Recent Activities"}
          display={" d-none "}
          sales={'d-none'}
        />
        <div className="records">
          {recentActivity.map((data, idx) => (
            <div className="row bg-white pb-3 " key={idx}>
              <p className="col-6 bg-white d-flex align-items-center gap-2">
                <span
                  style={{
                    height: "8px",
                    display:'inline-block',
                    width: "8px",
                    borderRadius: '50%',
                    backgroundColor: getRandomColor(),
                  }}
                >
                  &nbsp;&nbsp;&nbsp;
                </span>
                <span className="bg-white">{data.title}</span>
              </p>
              <p className="col-6 text-end bg-white ml-5">{data.time}</p>
            </div>
          ))}
          <hr />
          <div className="view_all">
          <button className="view_all">
            <span>
              VIew All
            </span>
            <BsArrowRight className="icon"/>
          </button>
          </div>
        </div>
        </div>
      </div>
      <div className="transactions col-lg-4 col-md-6 my-4">
        <div className="container-fluid bg-white py-3 px-3">
        <ContentHeader title={"Transactions"} display={"bg-white "} sales={'d-none'}/>
        <div className="records">
          {Transactions.map((data, idx) => (
            <div className="my-3" key={idx}>
              <div className="left">
                <img src={data.img} alt="img" className="left_1"/>
                <div className="left-2">
                  <small className="name">{data.name}</small>
                  <small className="time">{data.time}</small>
                </div>
              </div>
              <span className={`right ${data.status?'text-success':'text-danger'}`}>{data.money}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="Wallet_Balance col-lg-4 col-md-6 my-4">
            <div className="panel overflow-hidden">
              <div className="panel_1 px-4 py-4">
                <div className="top py-2 row">
                  <div className=" col-6 px-1 left">
                    <img src="./img/user/user2.png" alt="user" />
                    <p>Alan Green</p>
                  </div>
                  <BsPlusLg className="right col-6"/>
                </div>
                <div className="bottom row ">
                  <p className="left col-6">Wallet Balence</p>
                  <p className="right col-6 text-end">$3567</p>
                </div>
              </div>
              <div className="panel_2  row">
                <div className="left col-6">
                  <div className="top">
                    <small>Received</small>
                    <IoIosArrowUp className='right text-primary' />
                  </div>
                  <p className="bottom col-6">
                    $97.99
                  </p>
                </div>
                <div className="right">
                  <div className="top">
                    <small>Spent</small>
                    <IoIosArrowDown className='right text-danger' />
                  </div>
                  <p className="bottom">
                    $53.00
                  </p>
                </div>
              </div>
              <div className="panel_3 px-3 ">
                <div className="panel_3_1">
                  <PiDotOutlineFill className="icon text-white"/>
                  <small className=" pe-3">Pending</small>
                </div>
                <div className="panel_3_2  pt-4">
                  <p className="left ">Netflix</p>
                  <p className="right ">$ 16.78</p>
                </div>
                <div className="panel_3_2 py-3">
                  <p className="left ">BlueHost VPN</p>
                  <p className="right ">$ 16.78</p>
                </div>
                <div className="panel_3_3  d-flex justify-content-evenly px-4">
                  <button className=" left bg-cyab text-light">View Details</button>
                  <button className=" right bg-success text-light">Pay Now $78.23</button>
                </div>
              </div>
            </div>
      </div>
      <div className="orders col-lg-6">
            <div className="container-fluid py-2 px-0">
              <div className="table">
              <ContentHeader title={'Recent Orders'} display={'d-none'} sales={'d-none'}/>
              <table className="my-0 w-100">
                <div className="ti">
                <tr>
                  <th>Costumer</th>
                  <th>Product</th>
                  <th>Invoice</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
                </div>
                {
                  orders.map((item,idx) =>(
                    <tr className=" border-bottom">
                      <td>
                        <img src={item.img} alt="" />
                        <span>{item.customerName}</span>
                      </td>
                      <td style={{color: getRandomColor()}}>{item.product}</td>
                      <td>{item.invoice}</td>
                      <td>{item.price}</td>
                      <td >
                        <span className={`text-white px-3 py-1 rounded ${item.status==='Paid'?'bg-success':'bg-info'}`}>
                        {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </table>
              </div>
            </div>
      </div>

      <div className="top_selling col-lg-6">
      <div className="container-fluid py-2 px-0">
              <div className="table">
              <ContentHeader title={'Top Selling Product'} display={'d-none'} sales={'d-none'}/>
              <table className="my-0 w-100">
                <div>
                <tr className="">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Sold</th>
                  <th>Source</th>
                </tr>
                </div>
                {
                  products.map((item,idx) =>(
                    <tr className=" border-bottom">
                      <td>
                        <img src={item.img} alt="" />
                        <div className="">
                        <span>{item.product}</span>
                        <small style={{color: getRandomColor()}}>{item.category}</small>
                        </div>
                      </td>
                      <td >{item.price}</td>
                      <td>{item.discount}</td>
                      <td>{item.sold}</td>
                      <td >
                        <span style={{color: getRandomColor(), paddingRight: '5px'}}><PiShareFat /></span>
                        <span style={{color: getRandomColor()}}>
                        {item.source}
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </table>
              </div>
            </div>
      </div>
      <div className="home-footer">
      <Footer />
      </div>
      
    </div>

  );
}

export default Content;
