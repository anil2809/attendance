students_list=[
    {
        name:"Bhargav",
        roll:"61",
        present:0
    },
    {
        name:"Chaitanya",
        roll:"62",
        present:0
    },
    {
        name:"Aravind",
        roll:"63",
        present:0
    },
    {
        name:"Sanjana",
        roll:"64",
        present:0
    },
    {
        name:"Ayush Kumar",
        roll:"65",
        present:0
    },
    {
        name:"Bhuvan",
        roll:"66",
        present:0
    },
    {
        name:"Vinay",
        roll:"67",
        present:0
    },
    {
        name:"Pavan Kumar",
        roll:"68",
        present:0
    },
    {
        name:"Chandana",
        roll:"69",
        present:0
    },
    {
        name:"Saritha",
        roll:"70",
        present:0
    },
    {
        name:"Veda Swaroopa",
        roll:"71",
        present:0
    },
    {
        name:"Srikari",
        roll:"72",
        present:0
    },
    {
        name:"Kethana",
        roll:"73",
        present:0
    },
    {
        name:"Rishi",
        roll:"74",
        present:0
    },
    {
        name:"Janardhan",
        roll:"75",
        present:0
    },
    {
        name:"Guru prakash",
        roll:"76",
        present:0
    },
    {
        name:"Aishwarya",
        roll:"77",
        present:0
    },
    {
        name:"Meghana",
        roll:"78",
        present:0
    },
    {
        name:"Rishika Sharon",
        roll:"79",
        present:0
    },
    {
        name:"Shiva Chaitanya",
        roll:"80",
        present:0
    },
    {
        name:"Mahesh",
        roll:"81",
        present:0
    },
    {
        name:"Sravan Reddy",
        roll:"82",
        present:0
    },
    {
        name:"Sharath reddy",
        roll:"83",
        present:0
    },
    {
        name:"sai Phanidhar",
        roll:"84",
        present:0
    },
    {
        name:"Rohan Raj",
        roll:"85",
        present:0
    },
    {
        name:"Rambabu",
        roll:"86",
        present:0
    },
    {
        name:"Hafsah",
        roll:"87",
        present:0
    },
    {
        name:"Sharath Kumar",
        roll:"88",
        present:0
    },
    {
        name:"Akshitha",
        roll:"89",
        present:0
    },
    {
        name:"Nikhil",
        roll:"90",
        present:0
    },
    {
        name:"Karthikeya",
        roll:"91",
        present:0
    },
    {
        name:"Lohith Kumar",
        roll:"92",
        present:0
    },
    {
        name:"Harshini",
        roll:"93",
        present:0
    },
    {
        name:"Ruthvik",
        roll:"94",
        present:0
    },
    {
        name:"Divya",
        roll:"95",
        present:0
    },
    {
        name:"Saketh Raja",
        roll:"96",
        present:0
    },
    {
        name:"Nikitha",
        roll:"97",
        present:0
    },
    {
        name:" k Nithin",
        roll:"98",
        present:0
    },
    {
        name:"Sriman",
        roll:"99",
        present:0
    },
    {
        name:"Nithin Maskuri",
        roll:"A0",
        present:0
    },
    {
        name:"Abdul Muqthadeer",
        roll:"A1",
        present:0
    },
    {
        name:"Manohar reddy",
        roll:"A2",
        present:0
    },
    {
        name:"Snigdha",
        roll:"A3",
        present:0
    },
    {
        name:"Kalpana",
        roll:"A4",
        present:0
    },
    {
        name:"Rithika",
        roll:"A5",
        present:0
    },
    {
        name:"Neha Reddy",
        roll:"A6",
        present:0
    },
    {
        name:"Shanmukh Reddy",
        roll:"A7",
        present:0
    },
    {
        name:"Yashwanth Kumar",
        roll:"A8",
        present:0
    },
    {
        name:"R k Ashwin",
        roll:"A9",
        present:0
    },
    {
        name:"Chandrahas",
        roll:"B0",
        present:0
    },
    {
        name:"Ratan Kumar",
        roll:"B1",
        present:0
    },
    {
        name:"Sahil Tamang",
        roll:"B2",
        present:0
    },
    {
        name:"Sathvika",
        roll:"B3",
        present:0
    },
    {
        name:"Emmanuel",
        roll:"B4",
        present:0
    },
    {
        name:"Abhinav",
        roll:"B5",
        present:0
    },
    {
        name:"Rohith",
        roll:"B6",
        present:0
    },
    {
        name:"Praneeth Reddy",
        roll:"B7",
        present:0
    },
    {
        name:"V k Madhan",
        roll:"B8",
        present:0
    },
    {
        name:"Sai Ram",
        roll:"B9",
        present:0
    },
    {
        name:"Srujan",
        roll:"C0",
        present:0
    },
    {
        name:"Naresh",
        roll:"21_3507",
        present:0
    },
    {
        name:"Murali",
        roll:"21_3508",
        present:0
    },
    {
        name:"Rahul",
        roll:"21_3509",
        present:0
    },
    {
        name:"Owais Hussain",
        roll:"21_3510",
        present:0
    },
    {
        name:"Karthik",
        roll:"21_3511",
        present:0
    },
    {
        name:"Anil",
        roll:"21_3512",
        present:0
    },
]


for(var i=0;i<67;i=i+2){
    // console.log(students_list[i]["name"]+" "+students_list[i]["roll"])
    document.write(`
    <div class="row">
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i]["name"]}
            </div>
        </button>
    </div>
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i+1]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i+1]["name"]}
            </div>
        </button>
    </div>
    
    
</div>
    `)
}

document.write(`
<div class="row">
<div class="col-6">
    <button class="btn btn-danger btn1">
        <div class="roll">
            <b>${students_list[60]["roll"]}</b>
        </div>
        <div class="name">
            ${students_list[60]["name"]}
        </div>
    </button>
</div>
</div>
`)

