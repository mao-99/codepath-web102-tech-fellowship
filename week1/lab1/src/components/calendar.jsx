import Event from "./event"
export default function Calendar() {

    return (
        <>
            <div className="calendar">
                <table>
                    <thead>
                        <td><span></span></td>
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="time">6:00 AM</td>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                            <Event event="Pray" color="#29E7CD" location=""/>
                        </tr>
                        <tr>
                            <td className="time">7:00 AM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="Workout" color="#F4EBE8" location="Crunch Gym"/>
                            <Event event="Workout" color="#F4EBE8" location="Crunch Gym"/>
                            <Event event="Workout" color="#F4EBE8" location="Crunch Gym"/>
                            <Event event="Workout" color="#F4EBE8" location="Crunch Gym"/>
                            <Event event="Workout" color="#F4EBE8" location="Crunch Gym"/>
                            <Event event="" color="lightblue" location=""/>
                        </tr>
                        <tr>
                            <td className="time">8:00 AM</td>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                            <Event event="Breakfast" color="#E0ACD5" location="Home"/>
                        </tr>
                        <tr>
                            <td className="time">9:00 AM</td>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                            <Event event="Work" color="#169873" location="BMCC F411"/>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                            <Event event="Freshen Up" color="#3993DD" location="Home"/>
                        </tr>
                        <tr>
                            <td className="time">10:00 AM</td>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="CSC 382" color="#F7AF9D" location="1N 111"/>
                            <Event event="Work" color="#169873" location="BMCC F411"/>
                            <Event event="CSC 382" color="#F7AF9D" location="1N 111"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                        </tr>
                        <tr>
                            <td className="time">11:00 AM</td>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="CSC 382" color="#F7AF9D" location="1N 111"/>
                            <Event event="Work" color="#169873" location="BMCC F411"/>
                            <Event event="CSC 382" color="#F7AF9D" location="1N 111"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                            <Event event="Algorithms + Leetcode" color="#169873" location="Home"/>
                        </tr>
                        <tr>
                            <td className="time">12:00 PM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="126 Tutor" color="#F3EEC3" location="1P 120"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="126 Tutor" color="#F3EEC3" location="2N 103"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                        </tr>
                        <tr>
                            <td className="time">1:00 PM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="126 Tutor" color="#F3EEC3" location="1P 120"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="126 Tutor" color="#F3EEC3" location="2N 103"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                        </tr>
                        <tr>
                            <td className="time">2:00 PM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="126 Tutor" color="#F3EEC3" location="1P 120"/>
                            <Event event="1N-113 Tutor" color="#7EB77F" location="1N 113"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">3:00 PM</td>
                            <Event event="WEB 102 + 103 HW" color="lightblue" location="Home"/>
                            <Event event="126 Tutor" color="#F3EEC3" location="2N 115"/>
                            <Event event="1N-113 Tutor" color="#7EB77F" location="1N 113"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">4:00 PM</td>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="1N-113 Tutor" color="#7EB77F" location="1N 113"/>
                            <Event event="1N-113 Tutor" color="#7EB77F" location="1N 113"/>
                            <Event event="CSC 347 Adj. CLT" color="#7EB77F" location="5N 106"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">5:00 PM</td>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="1N-113 Tutor" color="#7EB77F" location="1N 113"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="CSC 347 Adj. CLT" color="#7EB77F" location="5N 106"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">6:00 PM</td>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="CSC 305" color="#92904F" location="1S 110"/>
                            <Event event="CSC 315" color="#92904F" location="1N 004"/>
                            <Event event="CSC 347 Adj. CLT" color="#7EB77F" location="5N 106"/>
                            <Event event="CSC 332 + WEB103" color="#92904F" location="2N 002"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">7:00 PM</td>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="CSC 305" color="#92904F" location="1S 110"/>
                            <Event event="CSC 315" color="#92904F" location="1N 004"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="CSC 332 + WEB103" color="#92904F" location="2N 002"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">8:00 PM</td>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="126 Tutor" color="#F3EEC3" location="1N 004"/>
                            <Event event="CSC 315 + WEB102 TF" color="#92904F" location="1N 004"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="CSC 332 + WEB103" color="#92904F" location="2N 002"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                            <Event event="Work" color="#169873" location="BMCC S115B"/>
                        </tr>
                        <tr>
                            <td className="time">9:00 PM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="CSC 315 + WEB102 TF" color="#92904F" location="1N 004"/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                        </tr>
                        <tr>
                            <td className="time">10:00 PM</td>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                            <Event event="" color="lightblue" location=""/>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}