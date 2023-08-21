require 'compass/import-once/activate'
# Require any additional compass plugins here.

# require 'breakpoint'
# require 'susy'

# Set this to the root of your project when deployed:
# A 視覺潮流
# B 經典設計
# C 極簡風格
http_path = "/"
css_dir = "A/css/"
# css_dir = "B/css/"
# css_dir = "C/css/"
# css_dir = "css/"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:


Encoding.default_external = "utf-8"
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8
sourcemap = true
