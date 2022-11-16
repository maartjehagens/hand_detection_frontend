import * as React from "react";

const Settings = () => {
     return (
         <form>
                 <legend>Dominant hand</legend>
                 <div>
                     <input type="radio" id="contactChoice1" name="contact" value="Left-handed"/>
                     <label htmlFor="contactChoice1">Left-handed</label>

                     <input type="radio" id="contactChoice2" name="contact" value="Right-handed"/>
                     <label htmlFor="contactChoice2">Right-handed</label>
                 </div>
         </form>
    );
};

export default Settings;