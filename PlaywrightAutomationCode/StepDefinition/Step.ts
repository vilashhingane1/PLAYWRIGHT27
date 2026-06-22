import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { text } from "node:stream/consumers";
import { expect } from '@playwright/test';
setDefaultTimeout(60 * 1000); // 60 seconds

import { Browser, chromium, Page, BrowserContext, firefox, webkit } from "playwright";


let browser: Browser;
let page: Page;
let context: BrowserContext;

Given('I launch the browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });

       page = await context.newPage();

});

Given('I launch the firefox browser', async function () {

    browser = await firefox.launch({
        headless: false,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });

       page = await context.newPage();

});

Given('I launch the webkit browser', async function () {

    browser = await webkit.launch({
        headless: true,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });

       page = await context.newPage();

});

Given('I launch the headless browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });

       page = await context.newPage();

});
Then('I launch the facebook application', async function () {

    await page.goto('https://www.facebook.com/');
    

});

Then('I close the browser', async function () {

    await browser.close();

});

Then('I launch the test auomation practice application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/');
    

});



Then('I verify playwright locators', async function () {

    
    console.log("----- get by placeholder------")

    // wait page.getplaceholder('attribute value of the placeholder).method()

    await page.getByPlaceholder('Enter Name').fill('Testing')

    await page.getByPlaceholder('Enter EMail').fill('Testing@gmail.com')

    console.log("--------get by text------")
    //await page.getbytext('text of the web elemnets ' ).methods()

    await page.getByText('START').click()

    await page.getByText('STOP').click()

    console.log('----get by role------')

    //await page.getbyrole('type of the webelements ', {name : 'type ofthe web elemnts' }).methods()

     await page.getByRole('button',{name : 'START'}).click()

    await page.getByRole('button', {name : 'STOP'}).click()

    await page.getByRole('checkbox', {name : 'sunday'}).click()

    await page.getByRole('checkbox', {name : 'Monday'}).click()
     await page.getByRole('checkbox', {name : 'Friday'}).click()

     await page.getByRole('textbox', {name : 'Enter Name'}).fill('using by loacator')
     await page.getByRole('textbox', {name : 'Enter Phone'}).fill('87867878')

});

Then('I verify playwright locators part2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    
    console.log("----- get by alt text------")

    await page.getByAltText('ParaBank').click()

    console.log("======get by title=====")

    //await page.getbytitle("attribyte value of the title").methods()

    await page.getByTitle('ParaBank').click()

    console.log('=====get by lable=====')
    
    //await oage.getbylable('text of the lable webelemnets ').methods()

    await page.goto('https://login.salesforce.com/?locale=in')

    await page.getByLabel('Username').fill('Testingvilluu')
    await page.getByLabel('password').fill('villuu@9896')
    
    });

    Then('I verify selenium locators', async function () {
          await page.goto('https://testautomationpractice.blogspot.com/');

        console.log("====== absolute xpath=====")

        // synatx await page.locator("Absolute xpath").methods()
      //  await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[2]').fill('Testing@gmail.com')

      console.log("====reletive xpath=====")

      //syntax:  await page.locators('reletive xpath').methods()
       await page.locator('//input[@id="name"]').fill('vilastest')
      await page.locator('//*[@id="email"]').fill('vilash@gmail.com')
      await page.locator('//*[@id="phone"]').fill('9667')

      console.log("======Css selector========")

      await page.locator('[id="textarea"]').fill('testing')
      // a means id in css selector
      await page.locator('#phone').type('  878786787')

      // . means class in css selector

      await page.locator(".wikipedia-search-input").type('vilashTesting')


          });


Then('I verify selenium xpath methods', async function () {

    console.log('====contains methods =======')

    await page.locator('//input[contains(@placeholder,"Enter Name")]').fill('vilash')

    await page.locator('//input[contains(@placeholder,"EMail")]').fill('vilashtest@gmail.com')

    await page.locator('//input[contains(@id,"Wikipedia1_wikipedia-search-input")]').fill('vilash testing')

      console.log("=======start with method========")

       await page.locator('//input[starts-with(@placeholder,"Enter")]').last().fill('Atul')

    await page.locator('//input[starts-with(@placeholder,"Enter")]').first().type('vilas98989@gmail.com')

      await page.locator('//textarea[@id="textarea"]').fill('testplaywright');


    console.log('======text method------')

var text = await page.locator("//h2[text()='Alerts & Popups']").innerText();
console.log("1st way:", text);

text = await page.locator("//*[text()='Alerts & Popups']").innerText();
console.log("2nd way:", text);

text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()
console.log("3rd way:", text);

text = await page.locator("//h2[starts-with(text(),'Alerts')]").innerHTML()
console.log("4th way:", text);


console.log("====and method====")

await page.locator('//*[@type="text" and @id="field2"]').fill('Hey');
await page.locator('//input[contains(@type,"text") and starts-with(@id,"field1")]').fill('Hello');


console.log("====or method======")

var orcount = await page.locator('//*[@type="text" and @id="field2"]').all()

console.log('orcount is ', orcount.length)
 await page.locator('//*[@type="text" or @id="field2"]').first().type('first')
  await page.locator('//*[@type="text" or @id="field2"]').last().type('last')
   await page.locator('//*[@type="text" or @id="field2"]').nth(5).type('sixth web elements ')

 // ('//*[@type="text" or @id="field2"]').nth(5) to identify 5 th elements 

 console.log("===css selector=====")

 console.log("=====contains======")


   await page.locator('[id="field2"]').fill('using css selector contains')

   console.log("====starts-with======")

   await page.locator('[id="field1"]').fill('using css selector starts-with')

         });


Then('I verify selenium xpath Axes', async function () {

    console.log("======Parent method=====")
    
var parentCount = await page.locator('//*[@id="field2"]//parent::div').all()

console.log('parentCount is:', parentCount.length) // parentCount is:1


    console.log("======Grand parent method ( ancester)====")
    
var ancestorCount = await page.locator('//*[@id="field2"]//ancestor::div').all()

console.log('ancestorCount is:', ancestorCount.length) // ancetorCount is:14


   console.log("======preceding====")
    
var precedingCount = await page.locator('//*[@class="form-group"]//preceding::h2').all()

console.log('precedingCount is:', precedingCount.length) // precdingCount is:10

console.log("======child====")
    
var childCount = await page.locator('//*[@class="form-group"]//child::input').all()

console.log('childCount is:',childCount.length) // childCount is:10

await page.locator('//*[@class="form-group"]//child::input').nth(6).click()


childCount = await page.locator('//*[@class="form-group"]//child::input[@type="text"]').all()

console.log('childCount is:',childCount.length) // childCount is:

await page.locator('//*[@class="form-group"]//child::input[@type="text"]').first().fill('child xpath axes')


console.log("=======descendantcount=======")


let descendantCount = await page.locator('//*[@class="form-group"]//descendant::input').all()

console.log('descendantCount is:', descendantCount.length)   // in lneght 12 

await page.locator('//*[@class="form-group"]//descendant::input').nth(6).click()

descendantCount = await page.locator('//*[@class="form-group"]//descendant::input[@type="text"]').all()

console.log('descendantCount is:', descendantCount.length) //in lenght :3

await page.locator('//*[@class="form-group"]//descendant::input[@type="text"]').first().fill('child xpath axes')

console.log("=======following======")


const followingCount = await page.locator('//*[@class="form-group"]//following::input').all();

console.log('followingCount is:', followingCount);    // in lenght 31

console.log("======following sibling=========")


const followingsiblingCount = await page.locator('//*[@placeholder="Enter Name"]/following-sibling::input').all();

console.log('followingsiblingCount is:', followingsiblingCount.length);  // in lenght +2

 await page.locator('//*[@placeholder="Enter Name"]/following-sibling::input').first().fill('followingsibling@gmail.com')

       });

       Then('I verify playwright Method', async function () {

        console.log("=====refresh the page=======")

        await page.reload()

     console.log("=====to scroll to the rescpective elemnets on the page=====")

     await page.getByText('New Tab').scrollIntoViewIfNeeded()
     console.log("======to click the elements on the web page=====")

     await page.getByText('New Tab').click()

     console.log("=======to go the previous page =======")

     await page.bringToFront()
       
     // 1st way

     await page.locator(".start").first().click()

     // 2nd way

     await page.locator(".stop").nth(0).click()


console.log("=====to enter text to the element on ths web page=======")

await page.getByPlaceholder("Enter Name").fill('vilash')
await page.getByPlaceholder('Enter EMail').type("vilashtest@gmail.com")

console.log("======toget more then one element at a time======")

var orcount = await page.locator('//*[@type="text" or @id="field2"]').all()
console.log('orcouuunt is', orcount.length) //13

console.log('===== to get the page title======')

console.log(await page.title())

console.log("=======to get the page URL=========")

console.log(await page.url())

console.log('======= to clear text from the elemnets on the web page=======')

await page.locator('#field1').scrollIntoViewIfNeeded()
await page.locator('#field1').clear()
await page.locator('#field1').fill("vilashtesting")

 console.log("=== to get the text of the elemnets =====")
var text = await page.locator("//h2[text()='Alerts & Popups']").innerText();
console.log("1st way:", text);

text = await page.locator("//*[text()='Alerts & Popups']").innerText();
console.log("2nd way:", text);

// innerhtml means view page source text will return

text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()
console.log("3rd way:", text);

text = await page.locator("//h2[starts-with(text(),'Alerts')]").innerHTML()
console.log("4th way:", text);

console.log("======= to get/read teh text from more then one web element=====")

console.log("====1st way=====")

// innertext means elemnets  tab or dom text it will retuen
var textOfthewebelemnets = await page.locator(".title").allInnerTexts()
console.log("textOfthewebelemnets count is", textOfthewebelemnets.length)


console.log('====for loop======')
for(let i=0; i<textOfthewebelemnets.length; i++){

console.log('text of the web element $(i) is:', textOfthewebelemnets[i])

}

console.log("======2nd way=====")

var textOfthewebelemnets = await page.locator(".title").allTextContents()
console.log("textOfthewebelemnets count is", textOfthewebelemnets.length)


console.log('====for loop======')
for(let i=0; i<textOfthewebelemnets.length; i++){

console.log('text of the web element $(i) is:', textOfthewebelemnets[i])

}

console.log("====to right click on an web elemnets ======")

await page.locator('.wikipedia-search-input').scrollIntoViewIfNeeded()
await page.locator('.wikipedia-search-input').click({button: "right"})

              });

Then('I verify playwright Method part2', async function () {

    console.log('====visible method =======')

    var visible = await page.locator('#female').isVisible()
    console.log('visible status is:', visible) // visible status

    if(visible==true){

        await page.locator('#female').click()
    }


    console.log('====hidden method =======')

    var hidden = await page.locator('#sunday').isHidden()
    console.log('hidden status is:', hidden) // visible status

    if(hidden==false){

        await page.locator('#sunday').click()
    }


    
    console.log('====disble method =======')

    var disabled = await page.locator('#monday').isDisabled()
    console.log('hidden status is:', disabled) // visible status

    if(disabled==false){

        await page.locator('#monday').click()
    }



    console.log('====enbled method =======')

    var enbled = await page.locator('#tuesday').isEnabled()
    console.log('hidden status is:', enbled) // visible status

    if(enbled==true){

        await page.locator('#tuesday').click()
    }
console.log('====chcked method =======')

var checked = await page.locator('#saturday').isChecked()
console.log('checked status is:',checked)

if(checked==false){

    await page.locator('#saturday').setChecked(true)
    checked = await page.locator('#saturday').isChecked()
    console.log('chcked status is:', checked)

}

if(checked == true){

    //await page.locator('#saturday').click()

    await page.locator('#saturday').uncheck()

    checked = await page.locator('#saturday').isChecked()
    console.log('chcked status is:', checked)
}

   });


   Then('I verify playwright Method part3', async function () {

    await page.goto("https://www.myntra.com/")

    console.log('====hover =======')

    await page.locator("//*[text()='Kids']").first().hover()

    console.log("======Highlight the web elements=======")

    await page.getByPlaceholder('Search for products, brands and more').highlight()
     await page.getByPlaceholder('Search for products, brands and more').fill("T-Shirt")

     console.log("======get attribute=======")

   var attributevalue= await page.getByPlaceholder('Search for products, brands and more').getAttribute('data-reactid')
   console.log("Attribute value of placeolder is:", attributevalue)


      var attributevalue= await page.getByPlaceholder('Search for products, brands and more').getAttribute('class')
   console.log("Attribute value of placeolder is:", attributevalue)
    });

    Then('I verify playwright Method part4', async function () {

        console.log("======1st way====")
        console.log("clear the text from the textbox======")

         await page.locator('#field1').scrollIntoViewIfNeeded()
         await page.locator('#field1').clear()
         await page.locator('#field1').fill("villtesting")

         console.log("======2nd way=======")

         await page.locator('#field1').fill(" ")
         await page.locator('#field1').fill("ajaytest")


          console.log("======3rd way keyboard action=======")

         await page.locator('#field1').press('Control+A')
        await page.keyboard.press('Delete')
        await page.keyboard.up("Control")
        await page.keyboard.insertText("Vijaytest")

 console.log("======4the way to enter text to the textbox=======")

         await page.locator('#field1').clear()
           await page.locator('#field1').pressSequentially('atul')


            console.log("======5th way drag and drop=======")

            var first = await page.locator('#draggable')
             var second = await page.locator('#droppable')

             await first.dragTo(second)

            });


            
    Then('I verify playwright Methods part5', async function () {


        console.log("======handling dropdown=======")

        var colorsDropdown = await page.locator('#colors')
        await colorsDropdown.scrollIntoViewIfNeeded()
        await colorsDropdown.selectOption('Red')
        await colorsDropdown.selectOption('Green')
        await colorsDropdown.selectOption('White')
         await colorsDropdown.selectOption(['Yellow','Green','White'])

         await colorsDropdown.selectOption({index:2})

         await colorsDropdown.selectOption([{index:2}, {index:0}])


         console.log('==========1st way to take the screenshot=====')
          
         await page.getByPlaceholder('Enter Name').scrollIntoViewIfNeeded()
         await page.getByPlaceholder('Enter Name').fill('Vilashtesting')
         await page.getByPlaceholder('Enter Name').screenshot({path: 'EnterNameTextbox.png'})

         console.log('-------2nd way to take teh screenshot up to screen lenght------')

         await page.screenshot({path: './PlaywrightAutomationCode/scrennshots/UptoScreenlength.jpg'})

         console.log("======3rd way to take screenshot of entire web page======")

         await page.screenshot({path: './PlaywrightAutomationCode/Screenshots/fullpage.jpg'})

   
         console.log("======4thway to take screenshot of entire web page======")

         await page.screenshot({path: './PlaywrightAutomationCode/Screenshots/verify_playwright_Method_part5_fullpage.jpg',fullPage: true
});


            });

Then('I verify playwright Dates', async function () {


  const todaysDate = new Date() // todayes date 

console.log('todayDate is:', todaysDate) // 
const todaysDateInIST = todaysDate.toLocaleDateString()

console.log("todaysDateInIST is :", todaysDateInIST)

 const yesterdaysDateInIST = new Date(todaysDate) 
 yesterdaysDateInIST.setDate(yesterdaysDateInIST.getDate()-1)

console.log("yesterdaysDateInIST is :", yesterdaysDateInIST.toLocaleDateString())

const futurDateInIST = new Date(todaysDate)
futurDateInIST.setDate(futurDateInIST.getDate()+10)
console.log("futurDateInIST is:", futurDateInIST.toLocaleDateString()) // futurDatINISTis:-
const year=todaysDate.getFullYear()
const month=todaysDate.getMonth()+1
const date=todaysDate.getDate()
console.log(year, '/', month, '/', date)
console.log(month, '/', year, '/', date)
console.log(year, '/', month, '/', date)

console.log('======english langugage in month=======')

const completeMonthName = todaysDate.toLocaleDateString('en-us', {month : 'long'})
console.log('completeMonthName is:', completeMonthName)


const shortMonthName = todaysDate.toLocaleDateString('en-us', {month : 'short'})
console.log('shortMonthName is:', shortMonthName)


  });

Then('I verify web table in static way', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if(webTable ==true){

  console.log("web Table is  displyed on the web page")

  await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

  let expectedText = 'Amod'
  let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[6]//td[2]").innerHTML()
  if(actualText == expectedText){

    console.log(expectedText,"is displayed on the web table")
  }
    }
    else{

        console.log('web table is not displayed on the web page')
    }

});

    Then('I verify web table in static way2', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if(webTable == true){

        console.log("web Table is displyed on the web page")

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = 'Animesh'
        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[6]//td[2]").innerText()

        if(actualText == expectedText){

            console.log(expectedText," is displayed on the web table")

        }
        else{

            console.log(expectedText, 'is not on the web table')
        }

    }
    else{

        console.log('web table is not displayed on the web page')

    }
});



Then('I verify web table in dynamic way', async function () {

    let webTable = await page.locator('//table[@name="BookTable"]').isVisible();

    if (webTable) {
        console.log('Web table is displayed on the web page');

        await page.locator('//table[@name="BookTable"]').scrollIntoViewIfNeeded();

        let rows = await page.locator('//table[@name="BookTable"]//tbody//tr').all();

        if (rows.length > 0) {

            console.log('Web table has rows');

            for (let i = 1; i <= rows.length; i++) {
               

                let columns = await page.locator( "//table[@name='BookTable']//tbody//tr[" + i + "]//td" ).all();

                // if (columns.length > 0) {

                //     for (let j = 1; j <= columns.length; j++) {

                //         let expectedText = 'Selenium';

                //         let actualText = await page.locator( "//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]" ).innerText();

                //         if (actualText.trim() === expectedText) {

                //             console.log(expectedText + ' is displayed in the web table at Row: ' +i + ' and Column: ' + j );
                //         }


                 if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = 'Java';

                        let actualText = await page.locator( "//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]" ).innerText();

                        if (actualText.includes(expectedText)) {

                            console.log(expectedText + ' is displayed in the web table at Row: ' +i + ' and Column: ' + j );
                        }
                    }
                }
            }

        } else {
            console.log('Web table does not have rows');
        }

    } else {
        console.log('Web table is not displayed on the web page');
    }
});

    Then('I verify web table in dynamic way header section', async function () {

    let webTable = await page.locator('//table[@name="BookTable"]').isVisible();

    if (webTable) {

        console.log('Web table is displayed on the web page');

        await page.locator('//table[@name="BookTable"]').scrollIntoViewIfNeeded();

        let columns = await page.locator(
            "//table[@name='BookTable']//tbody//tr[1]//th"
        ).all();

        if (columns.length > 0) {

            console.log('Header columns count is: ', columns.length);

            for (let j = 1; j <= columns.length; j++) {

                let columnHeaderText = await page.locator(  "//table[@name='BookTable']//tbody//tr[1]//th[" + j + "]" ).innerText();

                console.log('Column header text is:', columnHeaderText);
            }

        } else {

            console.log('No header columns found');
        }

    } else {

        console.log('Web table is not displayed on the web page');
    }


});

Then('I verify web calendar in static way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded();
    await page.locator('#datepicker').click();

    let webCalendar = await page.locator('//div[@id="ui-datepicker-div"]').isVisible();

    if (webCalendar) {

        console.log('Web calendar is displayed on the web page');

        let expectedDate = '15';

        let actualDateText = await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[3]//td[7]').innerText();

        if (actualDateText === expectedDate) {

            console.log(expectedDate, 'is displayed on the web calendar');

            await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[3]//td[7]').click();
        }

    } else {

        console.log('Web calendar is not displayed on the web page');
    }

});
Then('I verify web calendar in dynamic way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded();
    await page.locator('#datepicker').click();

    let webCalendar = await page.locator('//div[@id="ui-datepicker-div"]').isVisible();

    if (webCalendar) {

        console.log('Web calendar is displayed on the web page');

        let expectedDate = '15';

        let actualDateText = await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[3]//td[7]').innerText();

        if (actualDateText === expectedDate) {

            console.log(expectedDate, 'is displayed on the web calendar');

            await page.locator('//table[@class="ui-datepicker-calendar"]//tbody//tr[3]//td[7]').click();
        }

    } else {

        console.log('Web calendar is not displayed on the web page');
    }

});

Then('I verify and method in playwright', async function () {

    await page.getByPlaceholder('Enter Name').fill('vilash');

    await page.locator('//input[@id="phone" and @placeholder="Enter Phone"]').fill('87867878');

    await page.locator('//input[@id="email" and @placeholder="Enter EMail"]').fill('vilash@example.com');

    await page.locator('.wikipedia-search-input').fill('vilash testing');

});

Then('I verify Hard and Hard Assertion in playwright', async function () {
await page.getByPlaceholder('Enter Name').fill('vilash');

    await page.locator('//input[@id="phone" and @placeholder="Enter Phone"]').fill('87867878');

    await page.locator('//input[@id="email" and @placeholder="Enter EMail"]').fill('vilash@example.com');

    await page.locator('.wikipedia-search-input').fill('vilash testing');


    });
Then('I verify Hard Assertion in playwright', async function () {

    await page.goto("https://www.amazon.in/");

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible();

    await page.getByPlaceholder("Search Amazon.in").fill("Mobile");

    await expect(page.locator('#nav-search-submit-button')).toBeVisible();

    await page.locator('#nav-search-submit-button').click();

    //await expect(page.locator("//*[@text()='Sell']")).toBeHidden();
    // await expect(page.locator("//*[@text()='Sell']")).toBeDisabled

   await expect(page.locator("//*[text()='Sell']")).toBeEnabled();

await expect(page.locator("//*[text()='Sell']")).toHaveCount(1);

await page.locator("//*[text()='Sell']").click();




console.log("======test Automation practices application=====")

await page.goto("https://testautomationpractice.blogspot.com/");

await expect(page.locator('//*[@class="title"]')).toHaveCount(17);

let title=await page.locator('//*[@class="title"]').all()

for(let i=0; i<title.length; i++){
    console.log(title[i])
}
await expect(page.locator("//h2[text()='Dynamic Button']")).toBeVisible();

await expect(page.locator("//h2[text()='Upload Files']")).toBeVisible();

await expect(page.locator("//h2[text()='Static Web Table']")).toBeVisible();

await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')
await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id','name')
await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')
await expect(page.getByPlaceholder('Enter Email')).toHaveId('email')
await expect(page.getByPlaceholder('Enter Email')).toBeEmpty()
await page.getByPlaceholder('Enter Name').pressSequentially('Test@gmail.com')
await expect(page.getByText('START')).toHaveRole('button')
await expect(page.getByText('START')).toHaveText('START')
await page.getByText('START').click()



console.log("Hi team Good morning");


});
   
Then('I verify soft Assertion in playwright', async function () {

    await page.goto("https://www.amazon.in/");

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeVisible();

    await page.getByPlaceholder("Search Amazon.in").fill("Mobile");

    await expect.soft(page.locator('#nav-search-submit-button')).toBeVisible();

    await page.locator('#nav-search-submit-button').click();

    // await expect.soft(page.locator("//*[@text()='Sell']")).toBeHidden();
    // await expect.soft(page.locator("//*[@text()='Sell']")).toBeDisabled();

   await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled();

await expect.soft(page.locator("//*[text()='Sell']")).toHaveCount(1);

await page.locator("//*[text()='Sell']").click();




console.log("======test Automation practices application=====")

await page.goto("https://testautomationpractice.blogspot.com/");

await expect.soft(page.locator('//*[@class="title"]')).toHaveCount(17);

let title=await page.locator('//*[@class="title"]').all()

for(let i=0; i<title.length; i++){
    console.log(title[i])
}
await expect.soft(page.locator("//h2[text()='Dynamic Button']")).toBeVisible();

await expect.soft(page.locator("//h2[text()='Upload Files']")).toBeVisible();

await expect.soft(page.locator("//h2[text()='Static Web Table']")).toBeVisible();

await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')
await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id','name')
await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')
await expect.soft(page.getByPlaceholder('Enter Email')).toHaveId('email')
await expect.soft(page.getByPlaceholder('Enter Email')).toBeEmpty()
await page.getByPlaceholder('Enter Name').pressSequentially('Test@gmail.com')
await expect.soft(page.getByText('START')).toHaveRole('button')
await expect.soft(page.getByText('START')).toHaveText('START')
await page.getByText('START').click()



console.log("Hi team Good morning");


});
   

 Then('I verify filter', async function () {

    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator('#login-button').click()
     await page.waitForTimeout(3000)
   
     await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click()
      await page.waitForTimeout(3000)
    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' }).click()
     await page.waitForTimeout(3000)
    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Bolt T-Shirt'}).getByRole('button', { name: 'Add to cart' }).click()

 await page.waitForTimeout(3000)
await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Remove' }).click()
 await page.waitForTimeout(3000)
    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Remove' }).click()
     await page.waitForTimeout(3000)
    
    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Bolt T-Shirt'}).getByRole('button', { name: 'Remove' }).click()
     await page.waitForTimeout(3000)
    
    





    });