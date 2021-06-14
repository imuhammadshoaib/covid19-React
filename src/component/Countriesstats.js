import Axios from "axios";
import { useEffect , useState } from "react";


const Countriesstats = () => {
    const [myData , setData] = useState([]);
    const [myGData , setGData] = useState("");
    const endPoint = 'https://api.covid19api.com/';
    const fetchSummary = 'summary';

    const fetchDefault = async () =>{
        var getSummary = await Axios.get(endPoint+fetchSummary);
        setData(getSummary.data.Countries);
        setGData(getSummary.data.Global);
        console.log(getSummary.data.Global); 
      }
    useEffect(() => {
        fetchDefault();
    }, []);
  
    return (
        <>
            <h1 className="text-center mt-5 mb-3">Covid19 Statistics</h1>
            <div className="col-md-12 grids-global">
                <div className="row"> 
                    <div className="col-md-4 mb-4">
                        <div className="bg-info p-5">
                            <h3 className="text-center"><strong>New Confirmed</strong></h3>
                            <h1>{myGData.NewConfirmed}</h1>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="bg-primary p-5">
                            <h3 className="text-center"><strong>New Deaths</strong></h3>
                            <h1>{myGData.NewDeaths}</h1>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="bg-dark p-5">
                            <h3 className="text-center"><strong>New Recovered</strong></h3>
                            <h1>{myGData.NewRecovered}</h1>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="bg-success p-5">
                            <h3 className="text-center"><strong>Total Recovered</strong></h3>
                            <h1>{myGData.TotalRecovered}</h1>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="bg-warning p-5">
                            <h3 className="text-center"><strong>Total Confirmed</strong></h3>
                            <h1>{myGData.TotalConfirmed}</h1>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="bg-danger p-5">
                            <h3 className="text-center"><strong>Total Deaths</strong></h3>
                            <h1>{myGData.TotalDeaths}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tableFixHead">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">CountryCode</th>
                    <th scope="col">Country</th>
                    <th scope="col">Date</th>
                    <th scope="col">TotalConfirmed</th>
                    <th scope="col">TotalDeaths</th>
                    <th scope="col">TotalRecovered</th>
                    </tr>
                </thead>
                <tbody>
                       { 
                          myData.map((value , index) => {
                            return( 
                                <>
                            <tr key ={index}>  
                                <td>{value.CountryCode}</td>
                                <td>{value.Country}</td>
                                <td>{value.Date}</td>
                                <td>{value.TotalConfirmed}</td>
                                <td>{value.TotalDeaths}</td>
                                <td>{value.TotalRecovered}</td>
                            </tr>
                                </>
                            ) 
                        })
                       }
                </tbody>
            </table>
            </div>
        </>
    );
};

export default Countriesstats;