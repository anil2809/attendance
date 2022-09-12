names=[
 "Bhargav",
 "Chaitanya",
 "Aravind",
 "Sanjana",
 "Ayush Kumar",
 "Bhuvan",
 "Vinay",
 "Pavan Kumar",
 "Chandana",
 "Saritha",
"Veda Swaroopa",
"Srikari",
"Kethana",
"Rishi",
"Janardhan",
"Guru prakash",
"Aishwarya",
"Meghana",
"Rishika Sharon",
"Shiva Chaitanya",
"Mahesh",
"Sravan Reddy",
"Sharath reddy",
"sai Phanidhar",
"Rohan Raj",
"Rambabu",
"Hafsah",
"Sharath Kumar",
"Akshitha",
"Nikhil",
"Karthikeya",
"Lohith Kumar",
"Harshini",
"Ruthvik",
"Divya",
"Saketh Raja",
"Nikitha",
" k Nithin",
"Sriman",
"Nithin Maskuri",
"Abdul Muqthadeer",
"Manohar reddy",
"Snigdha",
"Kalpana",
"Rithika",
"Neha Reddy",
"Shanmukh Reddy",
"Yashwanth Kumar",
"R k Ashwin",
"Chandrahas",
"Ratan Kumar",
"Sahil Tamang",
"Sathvika",
"Emmanuel",
"Abhinav",
"Rohith",
"Praneeth Reddy",
"V k Madhan",
"Sai Ram",
"Srujan",
"Naresh",
"Murali",
"Rahul",
"Owais Hussain",
"Karthik",
"Anil"
]
rolls=[]

for i in range(61,100):
      rolls.append(str(i))
for i in range(0,10):
  k="A"+str(i)
  rolls.append(k)
for i in range(0,10):
  k="B"+str(i)
  rolls.append(k)
rolls.append('C0')
for i in range(7,13):
  if(i<10):
    k='21_350'+str(i)
    rolls.append(k)
  else:
    k='21_35'+str(i)
    rolls.append(k)

rolls
with open("test.txt","w") as file:
    for i in range(len(names)):
        file.write("    {\n")
        file.write("        name:"+'"'+names[i]+'",'+"\n")
        file.write("        roll:"+'"'+rolls[i]+'",'+"\n")
        file.write("        present:"+str(0)+"\n")
        file.write("    },\n")
