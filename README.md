# sw_randnums
SignalWire Bulk Random Number Purchasing Bash Script

WARNING!!! ABUSE OR MANIPULATION OF THIS SCRIPT MAY COST YOU!!!

In the future you can execute command as such:

    bash sw_random.sh <local|tollfree> [1-50] [1-200]

Where [1-50] is how many you want per area code, and [1-200] is total numbers.

examples:

    bash sw_random.sh local                 <--- will prompt you for more info
    bash sw_random.sh tollfree              <--- will prompt you for more info 
    bash sw_random.sh local 2 10            <--- will purchase 10 random local numbers, 2 from 5 random area codes
    bash sw_random.sh tollfree 5 100        <--- will purchase 10 random tollfree numbers, 5 from 20 random area codes
    bash sw_random.sh local 8 16 dry        <--- dry run, dont acutally purchase 8 numbers from 2 random area codes, just see what's available
    bash sw_random.sh local 8 16 purchase   <--- real run, acutally purchase 8 local numbers from 2 random area codes

