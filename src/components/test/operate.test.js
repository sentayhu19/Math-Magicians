import operate from "../../logic/operate";

describe('Operate test',() => {
    const n1 = [934,2,41,57,15,0,100,61.34];
    const n2 = [60,10,32,58,5,50,12.45];
    it('Adding two numbers', () => {
        test = operate(n1[0],n2[0], '+');
         expect(test).toBe('994');
     }
     )
     ,
     it('Sub of numbers', () => {
        test = operate(n1[1],n2[1], '-');
         expect(test).toBe("-8");
     }
     ),
     it('multiplication of numbers', () => {
        test = operate(n1[2],n2[2], 'x');
         expect(test).toBe("1312");
     }
     ),
     it('Div of numbers', () => {
        test = operate(n1[6],n2[5], '÷');
         expect(test).toBe("2");
     }
     ),
     it('Division by zero should be Cant divide by 0', () => {
        test = operate(n2[2],n1[5], '÷');
         expect(test).toBe("Can't divide by 0.");
     }
     ),
     it('Modulo operation', () => {
        test = operate(n2[5],n1[6], '%');
         expect(test).toBe("50"); 
     }
     ),
     it('Div with long floating point result', () => {
        test = operate(n2[3],n1[3], '÷');
         expect(test).toBe("1.01754385964912280702"); 
     }
     ),
     it('Div with floating point numbers', () => {
        test = operate(n1[7],n2[6], '÷');
         expect(test).toBe("4.92690763052208835341"); 
     }
     )
})