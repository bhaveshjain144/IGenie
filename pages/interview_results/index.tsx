/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home: NextPage = () => {
    const router = useRouter()

    return (


        <>
            <div className='table-container'>
                
                    <div className='table_box'>
                        <div className='table_header'>
                            <Link href={'/'}>
                                <Image
                                    className='genie_logo'
                                    src="/images/genie.png"
                                    alt="logo"
                                    width={130}
                                    height={80}
                                >
                                </Image>
                            </Link>
                        </div>
                        <hr></hr>
                    </div>

                    <div className='table_heading'>
                        <h3 style={{ fontWeight: "bold" }}>Interview Results</h3>
                    </div>


                    <div className='table_outer'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className='result_head'>Name</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Interviewer</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>

                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='hold-view-link '>Hold</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='reject-view-link '>Rejected </a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                                <tr>
                                    <th className='table_head'>Laura Norda</th>
                                    <td>0000 000 000</td>
                                    <td>16</td>
                                    <td>84</td>
                                    <td>Krishnanunny Mangalasseri</td>
                                    <td>July 29, 2022</td>
                                    <td><a className='selected-view-link '>Selected</a></td>
                                    <td className='download-view-link '>Download</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
            </div>
        </>
    )
}
export default Home