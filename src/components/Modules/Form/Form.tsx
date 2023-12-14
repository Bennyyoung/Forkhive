import React from "react"

interface IForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    handleAttachment: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}

const Form: React.FC<IForm> = ({ handleSubmit, handleChange, handleAttachment, name }) => {

    return (
        <div className="container">
            <div className="row">
            </div><br />
            <div style={{ margin: "0", paddingBottom: '80px' }}>
                <form
                    className="container"
                    name={name}
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/thank-you"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value={name} />

                    <h3 className="mt-4">SUBMIT YOUR APPLICATION 📂</h3>
                    <p>
                        <input type="date" required onChange={handleChange} name="Date Applied"></input>
                    </p>
                    <div>
                        <label>
                            Upload your picture: 🧑
                            <input placeholder="ATTACH RESUME/CV" name="Picture" type="file" required onChange={handleAttachment} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Resume/CV: 🧑
                            <input placeholder="ATTACH RESUME/CV" name="Resume/CV" type="file" required onChange={handleAttachment} />
                        </label>

                    </div>

                    <div>
                        <label>
                            Full name: 📛
                            <input type="text" required onChange={handleChange} name="Full name" />
                        </label>
                    </div>

                    <div>
                        <label>
                            Email: 📧
                            <input type="email" required onChange={handleChange} name="Email" />
                        </label>
                    </div>

                    <div>
                        <label>
                            Phone number: 📞
                            <input type="number" required onChange={handleChange} name="Phone" />
                        </label>
                    </div>

                    <div>
                        <label>
                            DOB: 📅
                            <input type="date" required onChange={handleChange} name="DOB" />
                        </label>
                    </div>

                    <div>

                        <label>
                            Address: 🏡
                            <input type="text" required onChange={handleChange} name="Address" />
                        </label>
                    </div>

                    <div>

                        <label>
                            Address: 🏡
                            <input type="text" required onChange={handleChange} name="City" />
                        </label>
                    </div>

                    <div>

                        <label>
                            State: 🏙️
                            <select required onChange={handleChange} name="State">
                                <option disabled selected>--Select State--</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross Rive">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="FCT">Federal Capital Territory</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            When are you able to begin work? 📅
                            <input type="date" required onChange={handleChange} name="Start Date"></input>
                        </label>
                    </div>

                    <div>
                        <label>
                            Are you available to work overtime [Yes/No]:
                            <input type="text" required onChange={handleChange} name="Overtime Work"></input>
                        </label>
                    </div>

                    <div>
                        <label>
                            Are you legally eligible to work in Nigeria (🇳🇬)? Yes/No
                            <input type="text" required onChange={handleChange} name="Eligible"></input>
                        </label>
                    </div>

                    <div>
                        <label>
                            Current company: 🏢
                            <input type="text" onChange={handleChange} name="Current Company before applying"></input>
                        </label>
                    </div>

                    <h6><strong>Attend to the days you would be available and fill in hours available (24hr 🕒 System)</strong></h6>
                    <p>Monday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Mon" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Mon" />

                    <p>Tuesday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Tue" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Tue" />

                    <p>Wednesday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Wed" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Wed" />

                    <p>Thursday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Thur" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Thur" />

                    <p>Friday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Fri" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Fri" />

                    <p>Saturday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Sat" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Sat" />

                    <p>Sunday 🕒</p>
                    <input type="time" onChange={handleChange} name="Start Time on Sun" />
                    <label htmlFor="time">To </label>
                    <input type="time" onChange={handleChange} name="Stop Time on Sun" />

                    <h6><strong>LINKS 🌐</strong></h6>
                    <label>
                        LinkedIn URL 🌐
                        <input type="url" required placeholder="https://example.com" onChange={handleChange} pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="LinkedIn URL"></input>
                    </label>
                    <label>
                        Twitter URL 🌐
                        <input type="url" required placeholder="https://example.com" onChange={handleChange} pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Twitter URL"></input>
                    </label>
                    <label>
                        GitHub URL 🌐
                        <input type="url" placeholder="https://example.com" onChange={handleChange} pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Github URL"></input>
                    </label>
                    <label>
                        Portfolio URL 🌐
                        <input type="url" placeholder="https://example.com" onChange={handleChange} pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Portfolio URL"></input>
                    </label>
                    <label>
                        Other website 🌐
                        <input type="url" placeholder="https://example.com" onChange={handleChange} pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Other website"></input>
                    </label>
                    <h6><strong>ADDITIONAL INFORMATION 🛈</strong></h6>
                    <p>
                        <textarea style={{ width: '100%', height: '300px' }} placeholder="Add a cover letter or anything else you want to share." name="comment" onChange={handleChange}></textarea>
                    </p>
                    <p>
                        I authorize you to verify the information listed above. I certify that the information contained in this employment application is accurate and truthful. I understand that providing false information on this application may be grounds for not offering me employment or for the termination of my employment at any point in the future.
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <button style={{ marginLeft: '20px' }} type="submit">SUBMIT APPLICATION &nbsp;</button>
                    <button type="reset">RESET</button>
                </form>

            </div>

            <div className="col-8">
                <h4 className="mt-4">Business Hours</h4>
                <table className="table table-sm opening-hours-table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <td className="day font-weight-bold">Monday</td>
                            <td className="opens">9:00am - 5:00pm</td>
                        </tr>
                        <tr>
                            <td className="day font-weight-bold">Tuesday</td>
                            <td className="opens">9:00am - 5:00pm</td>
                        </tr>
                        <tr>
                            <td className="day font-weight-bold">Wednesday</td>
                            <td className="opens">9:00am - 5:00pm</td>
                        </tr>
                        <tr>
                            <td className="day font-weight-bold">Thursday</td>
                            <td className="opens">9:00am - 5:00pm</td>
                        </tr>
                        <tr>
                            <td className="day font-weight-bold">Friday</td>
                            <td className="opens">9:00am - 5:00pm</td>
                        </tr>
                        <tr>
                            <td className="day font-weight-bold">Saturday</td>
                            <td className="opens">12:00pm - 5:00pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form