<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%s",$a);
fscanf($handle,"%s",$b);

$outer = str_split($a);
$inner = str_split($b);

if (count($inner) > count($outer)) {
    $outer = str_split($b);
    $inner = str_split($a);
}

$outerIndex = count($outer) - 1; // Start from the last index

while (count($inner) > 0 && count($outer) > 0 && $outerIndex >= 0) {
    $innerIndex = array_search($outer[$outerIndex], $inner);

    if ($innerIndex !== FALSE) {
        array_splice($outer, $outerIndex, 1);
        array_splice($inner, $innerIndex, 1);
    } 
    --$outerIndex;
}

echo count($outer) + count($inner);
?>
