function addfn(current, num) {

    return current + num;
}

function substractfn(current, num) {

    return current - num;
}

function multiplyfn(current, num) {

    return current * num;
}

function dividefn(current, num) {

    return current / num;
}

function invertfn(current) {

    return -1 * current;
}

function percentagefn(current) {

    current = current / 100;
    current = current.toString();
    return current;
}


function zeroObliterator(numstr) {


    if (numstr.charAt(0) === '0' && numstr.length > 1) {
        return numstr.slice(1);
    }
    return numstr;
}
