

    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685008804530').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1685008804514').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
  var $module = jQuery('#m-1685008804530-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685008804530-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1685008804502').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var variant = $product.data('gfv3product').getVariant();
    var diff_price = variant.compare_at_price - variant.price;
    $product.find('.gf_pq-percent').html(' ' + Shopify.formatMoney(diff_price,money_format));
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1685008804488').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1685008804492').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1685008804488-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685008804488-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    (function( jQuery ){
  var $module = jQuery('#m-1685008804446').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var variant = $product.data('gfv3product').getVariant();
    var diff_price = variant.compare_at_price - variant.price;
    $product.find('.gf_pq-percent').html(' ' + Shopify.formatMoney(diff_price,money_format));
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1685008804449').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1685008804549').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1685008804449-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685008804449-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1685008804410').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var variant = $product.data('gfv3product').getVariant();
    var diff_price = variant.compare_at_price - variant.price;
    $product.find('.gf_pq-percent').html(' ' + Shopify.formatMoney(diff_price,money_format));
  }
})( window.GemQuery || jQuery );